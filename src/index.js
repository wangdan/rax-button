import { createElement } from 'rax';
import { isWeex } from 'universal-env';
import Text from 'rax-text';
import View from 'rax-view';
import './index.css';

const Button = (props) => {
  const textStyles = {};
  let buttonClassName = 'text';

  if (props.color) {
    textStyles.color = props.color;
  }

  if (props.disabled) {
    buttonClassName += ' textDisabled';
  }

  let content = props.children || props.title;
  if (typeof content === 'string') {
    content = <Text className={buttonClassName} style={textStyles}>{content}</Text>;
  }

  return (
    <View role="button" {...props}>
      {content}
    </View>
  );
};

export default Button;
