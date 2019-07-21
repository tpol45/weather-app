import modeReducer from "../app/redux/mode"
import {SET_MODE} from "../app/redux/mode"

describe('mode reducer', () => {
  it('should be initialized to entry mode', () => {
    expect(modeReducer(undefined, {type: undefined, undefined})).toEqual('entry')
  })

  it('should switch to results mode when prompted', () => {
    expect(modeReducer('entry', {type: SET_MODE, mode: 'results'})).toEqual('results')
  })
})

