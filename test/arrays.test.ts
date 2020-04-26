import { flatten, arrayToRecord } from '../src'

describe('Testing array utils', () => {
  it('Flatten', () => {
    const deepArr = ['string_one', ['string_two', 'string_three']]
    const flat = flatten(deepArr)
    expect(flat).toStrictEqual(['string_one', 'string_two', 'string_three'])
  })

  it('Array to record', () => {
    const array = [
      {
        name: 'name_one',
        field: 'field_one',
      },
      {
        name: 'name_two',
        field: 'field_two',
      },
    ]
    const record = arrayToRecord(array, 'name')
    const expectedRecord = {
      name_one: {
        name: 'name_one',
        field: 'field_one',
      },
      name_two: {
        name: 'name_two',
        field: 'field_two',
      },
    }
    expect(record).toStrictEqual(expectedRecord)
  })
})
