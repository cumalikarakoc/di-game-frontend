import React from 'react'
import PropTypes from 'prop-types'
import ShowIfTrue from './ShowIfTrue'

const FlashMessages = ({errors, message, className}) => {
  const hasErrors = errors.length > 0
  const hasMessage = message !== ''

  const hasErrorsOrMessage = hasErrors || hasMessage

  return hasErrorsOrMessage && (
    <div className={`p-6 border-b border-grey-light text-black ${className}`}>
      <ShowIfTrue condition={hasErrors}>
        <div>
          <h3 key='message'>Something went wrong!</h3>
          <ul key='list' className="mt-2">
            {errors.map((error, index) => <li className="mt-px" key={index}
                                              dangerouslySetInnerHTML={{__html: error}}/>)}
          </ul>
        </div>
      </ShowIfTrue>
      <ShowIfTrue condition={hasMessage && !hasErrors}>
        <p><b dangerouslySetInnerHTML={{__html: message}}/></p>
      </ShowIfTrue>
    </div>
  )
}

FlashMessages.propTypes = {
  errors: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default FlashMessages
