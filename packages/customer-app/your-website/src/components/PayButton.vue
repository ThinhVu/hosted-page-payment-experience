<template>
  <button :id="btnId">Pay now {{ useIframe ? 'in Iframe' : 'in new tab' }}</button>
</template>

<script>
import {onMounted} from 'vue';
import {v4} from 'uuid';

export default {
  props: {
    useWebhook: Boolean,
    useMessage: Boolean,
    useIframe: Boolean
  },
  setup(props) {
    const btnId = `pay-btn-` + v4()

    const handleSdkLoaded = () => {
      setTimeout(() => {
        window.XService.mount({
          id: btnId,
          useIframe: props.useIframe
        });
      }, 500)
    }

    function loadSdk() {
      const sdkHref = `http://localhost:4000/scripts/${props.useMessage ? 'message': 'webhook'}-base.js`
      let script = document.querySelector(`script[src="${sdkHref}"]`);
      if (!script) {
        console.log('Loading sdk...');
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = sdkHref;
        script.onload = handleSdkLoaded;
        document.body.appendChild(script)
      } else {
        handleSdkLoaded();
      }
    }

    onMounted(() => loadSdk())

    return {
      btnId
    }
  }
}
</script>
