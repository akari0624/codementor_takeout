import { Provider } from 'react-redux'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import rootReducer from 'reducers'

export function renderTestedComponentWithReduxProvider(
  TestComponent,
  initAppState,
  ownProps
) {
  if (!ownProps) {
    throw new Error(`Are you sure your tested Component does not have own Props?
		                Please at least provide "{}" to ownProps, even your tested Component does not have own Props
										when you invoking "renderTestedComponentWithThemeAndReduxProvider(....)"	
										`)
  }

  return rtlRender(
    <Provider store={createStore(rootReducer, initAppState)}>
      <TestComponent {...ownProps} />
    </Provider>
  )
}
