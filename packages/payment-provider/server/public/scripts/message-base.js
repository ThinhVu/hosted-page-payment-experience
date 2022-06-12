// refs:
// https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
// https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
const XServiceAction = {
  PRE_AUTH: 'PRE_AUTH',
  CAPTURE: 'CAPTURE',
  SALE: 'SALE',
  VOID: 'VOID',
  REFUND: 'REFUND'
}

const toQueryStr = query => Object.keys(query).map(k => `${encodeURI(k)}=${encodeURI(query[k])}`).join('&')
const createPaymentId = () => Math.floor(Math.random() * Date.now())

const XService = {
  mount: config => {
    // const { id, useIframe, createOrder, onApprove, onReject } = config;
    const el = document.getElementById(config.id);
    if (el.__XService)
      return
    el.__XService = true
    el.addEventListener('click', async () => {
      const paymentId = createPaymentId();
      const queryStr = toQueryStr({
        ['payment-id'] : paymentId,
        action: config.action || XServiceAction.SALE
      });
      const paymentUrl = `http://localhost:4000/message-base?${queryStr}`;
      const iframe = document.createElement('iframe');

      if (config.useIframe) {
        iframe.src = paymentUrl;
        iframe.style = "position: fixed; top:0; left:0; width: 100vw; height: 100vh; background-color: #eee; z-index: 9999;";
      } else {
        // Because broadcastChannel cannot passing message for website which has different origin
        // So we need to open receiver iframe for listening response message
        // 1. open checkout in new tab - which establish broadcastChannel for sender
        // 2. open broadcastReceiver iframe - which establish broadcastChannel for receiver then post message to current window via iframe
        window.open(paymentUrl, '_blank');
        iframe.src = `http://localhost:4000/message-base-broadcast-event-receiver?${queryStr}`;
        iframe.style = "width: 0; height: 0";
      }

      const signature = `payment-${paymentId}`;
      const handleResponse =  ev => {
        console.log('window:onmessage', ev)
        const [returnSignature, result] = ev.data.split(':')
        if (returnSignature === signature) {
          window.removeEventListener("message", handleResponse)
          document.body.removeChild(iframe);
          alert(result);
        }
      }
      window.addEventListener('message', handleResponse);
      document.body.append(iframe);
    })
  }
}

window.XService = XService
