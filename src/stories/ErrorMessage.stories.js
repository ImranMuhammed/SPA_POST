import React from 'react'
import {ErrorMessage} from '../components/ErrorMessage'

export default {
    title: 'Example/ErrorMessage',
    component: ErrorMessage,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  export const With=()=> <ErrorMessage error="This is with error" />
  const Template = (args) => <ErrorMessage {...args} />;

  export const WithError=Template.bind({})
  WithError.args={
      error:"This is the erroor message"
  }

  export const WithoutError=Template.bind({})
  WithoutError.args={
      error:""
  }