import { createApp } from 'vue';
import App from './content/App.vue';
import VueMdijs from './plugins/vue-mdijs';
import style from './assets/scss/style.scss';
import VTooltip from './directives/VTooltip';

(() => {
  if (document.body.hasAttribute('css-inspector')) return;

  const app = createApp(App);

  app.use(VueMdijs);

  app.directive('tooltip', VTooltip);

  const shadowEl = document.createElement('div');
  shadowEl.classList.add('css-inspector');
  shadowEl.attachShadow({ mode: 'open' });

  const { shadowRoot } = shadowEl;

  const rootElement = document.createElement('div');
  rootElement.classList.add('root');

  const styleEl = document.createElement('style');
  styleEl.innerText = style;

  shadowRoot.appendChild(rootElement);
  shadowRoot.appendChild(styleEl);
  document.body.appendChild(shadowEl);
  document.body.setAttribute('css-inspector', true);

  app.mount(rootElement);
})();
