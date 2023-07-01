const Config = {
  useIframe: false,
}

const XService = {
  config: (config) => {
    // another stuff
    Config.useIframe = config.useIframe
  },
  mount: (id) => {
    const el = document.getElementById(id);
    const checkoutPageUrl = 'http://localhost:4000/webhook-base.html';
    if (el.__XService) {
      return
    }
    el.__XService = true
    el.addEventListener('click', () => {
      console.log('[webhook] trigger click')
      const paymentId = Math.floor(Math.random() * Date.now())
      const paymentUrl = `${checkoutPageUrl}?payment-id=${paymentId}`

      if (Config.useIframe) {
        const body = document.body
        const iframe = document.createElement('iframe')
        iframe.src = paymentUrl
        iframe.style = 'position: fixed; top:0; left:0; width: 100vw; height: 100vh; background-color: #eee; z-index: 9999;'
        body.append(iframe)
      } else {
        window.open(paymentUrl, '_blank');
      }
    })
  }
}

window.XService = XService
