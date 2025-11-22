const Blockquote = (content:string,...meta:{tag:string,val:string}[]) => {
const html = /*html*/`
    <blockquote
        ${
            meta.map((m)=>/*html*/`
            ${m.tag}="${m.val}"
                `
            ).join(' ')
        }
        class="quote"
    >
        ${content}
    </blockquote>
`
return html
}
export default Blockquote;