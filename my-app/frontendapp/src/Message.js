import React from 'react'
import ReactDOM from 'react-dom'

import  MessageComponent  from './MessageComponent';

import  MessagePureComponent  from './MessagePureComponent';

import  {MessageFunctionalComponent} from './MessageFunctionalComponent';

import  MessageElement  from './MessageElement';

export default class Message extends React.Component {
	render() {
		console.log(this)
		return (
			<div>
				<div>
					React create element example:
					<MessageElement msg = "Das ist meine erste React App"/>
					
				</div>
				
				<div>
					React create Component example
					<MessageComponent msg= "Das ist der Beispiel des ReactComponent "/>
					
				</div>

				<div>
					React create Pure Component example
					<MessagePureComponent msg= "Das ist der Beispiel des ReactPureCompoment . In Zukunft ich kann diesen Komponenten vergleichen"/>
					
				</div>

				<div>
					React create Functional Component example
					<MessageFunctionalComponent msg= "Das ist Das ist der Beispiel des Functional Component. Es benutzt arrow func. Das ist wunderbar"/>
					
				</div>
			</div>
		)
	}
}
