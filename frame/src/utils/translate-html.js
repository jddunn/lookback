/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-var: 0 */
/* eslint no-console: 0 */
/* eslint no-plusplus: 0 */
/* eslint no-empty: 0 */

import { getCurrentContent,
         convertToHTML, convertFromHTML } from 'draft-convert';

import { EditorState } from 'draft-js';

export function getHTMLFromContent(editorState) {
    const html = convertToHTML(editorState.getCurrentContent());
    return html;
}

export function getContentFromHTML(html) {
    console.log(html);
    const blocks = convertFromHTML(html);
    console.log(blocks);
    const editorState = EditorState.createWithContent(blocks);
    console.log("EDITOR STATE: ", editorState);
    return editorState;
}

// We only use this because we assume the user won't execute malicious code inside his notebook
export function HTMLToText(html) {
     // Set the HTML content with the providen
     const tempDivElement = document.createElement("div");
     tempDivElement.innerHTML = html;
     // Retrieve the text property of the element (cross-browser support)
     return tempDivElement.textContent || tempDivElement.innerText || "";
}