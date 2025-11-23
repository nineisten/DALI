import typescriptLogo from './typescript.svg'

export function render(_url: string) {
  const html = /*html*/`
    <div>
      <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
     
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    <div 
      id="greeting" 
      hx-get="portal/hello" 
      hx-trigger="click" 
      hx-target="#greeting" 
      hx-swap="innerHTML"
      hx-push-url="hello"
      >
        <img src="/htmx.svg" class="logo htmx" alt="htmx logo"/>
      </div>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <h1>Hello Vite!</h1>
      
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  `
  return { html }
}
