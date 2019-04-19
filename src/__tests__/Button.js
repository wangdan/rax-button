import { createElement, useState } from 'rax';
import renderer from 'rax-test-renderer';
import Button from '../';

// use jest.useFakeTimers()
jest.useFakeTimers();

const ButtonTest = () => {
  const [buttonText, setButtonText] = useState('normal');
  return (
    <Button onClick={(evt) => {
      setButtonText('click');
      // run setTimeout callback
      jest.runAllTimers();
    }}>{buttonText}</Button>
  );
};

describe('Button', () => {
  it('should render a button', () => {
    const component = renderer.create(
      <ButtonTest />
    );
    let tree = component.toJSON();

    expect(tree.tagName).toEqual('DIV');
    expect(tree.children[0].children[0]).toEqual('normal');
    // expect(tree).toMatchSnapshot();

    tree.eventListeners.click();
    tree = component.toJSON();
    expect(tree.children[0].children[0]).toEqual('click');
  });
});
