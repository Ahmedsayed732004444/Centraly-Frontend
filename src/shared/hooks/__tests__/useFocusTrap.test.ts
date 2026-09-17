import { getFocusableElements } from '../useFocusTrap';

describe('getFocusableElements', () => {
  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
      configurable: true,
      get() {
        return document.body;
      },
    });
  });
  it('returns enabled interactive elements only', () => {
    document.body.innerHTML = `
      <div id="root">
        <button type="button">ok</button>
        <button type="button" disabled>no</button>
        <input />
        <a href="#x">link</a>
      </div>
    `;
    const root = document.getElementById('root')!;
    const ids = getFocusableElements(root).map((el) => el.tagName.toLowerCase());
    expect(ids).toEqual(['button', 'input', 'a']);
  });
});
