import path from 'path'
import { transformWithPlugin, rmVarKeywords, nameOf } from './util'

describe('simple query with imported fragment', () => {
  test(`inlines as parsed doc containing FragmentDefinition`, () => {
    const { code } = transformWithPlugin('./fixtures/fragments/simple/simple.js')
    let fullQuery
    eval(code)
    expect(fullQuery.kind).toBe('Document')
    expect(fullQuery.definitions).toHaveLength(2)
    expect(fullQuery.definitions[0].kind).toBe('OperationDefinition')
    expect(fullQuery.definitions[1].kind).toBe('FragmentDefinition')
  })
})

describe('multiple operation document containing a fragment', () => {
  test('allows import of fragment', () => {
    const { code } = transformWithPlugin('./fixtures/fragments/mixed/mixed.js')
    let notAnOperation
    eval(code)
    expect(notAnOperation.kind).toBe('Document')
  })
})
