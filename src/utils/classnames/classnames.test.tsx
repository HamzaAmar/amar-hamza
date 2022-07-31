/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { classnames } from '.';

describe('only one argument string', () => {
  test('classnames with empty string', () => {
    expect(classnames('')).toStrictEqual({});
  });
  test('classnames with one argument', () => {
    expect(classnames('foo')).toStrictEqual({ className: 'foo' });
  });

  test('classnames with true condition', () => {
    expect(classnames(true && 'foo')).toStrictEqual({
      className: 'foo',
    });
  });

  test('classnames with false condition', () => {
    expect(classnames(false && 'foo')).toStrictEqual({});
  });
  test('classnames with mixed value', () => {
    expect(
      classnames('a', 0, null, undefined, true, 1, 'b'),
    ).toStrictEqual({
      className: 'a 1 b',
    });
  });
});

describe('with multi argument string', () => {
  test('classnames with multi arguments', () => {
    expect(classnames('foo bar baz')).toStrictEqual({
      className: 'foo bar baz',
    });
  });

  test('classnames with multi mixed condition', () => {
    expect(
      classnames(true && 'foo', false && 'baz', true && 'bar'),
    ).toStrictEqual({
      className: 'foo bar',
    });
  });

  test('classnames mixed', () => {
    expect(
      classnames(true && 'foo', 'baz', '', 'nice--hello'),
    ).toStrictEqual({
      className: 'foo baz nice--hello',
    });
  });
});

describe('only arrays', () => {
  test('classnames with multi array arguments', () => {
    expect(
      classnames(['foo bar baz'], [''], [''], ['bal']),
    ).toStrictEqual({
      className: 'foo bar baz bal',
    });
  });

  test('classnames with multi mixed condition', () => {
    expect(
      classnames(true && ['foo'], false && ['baz'], true && ['bar']),
    ).toStrictEqual({ className: 'foo bar' });
  });

  test('classnames mixed array with falsy value', () => {
    expect(
      classnames(['foo', null, '', false, 'bar', true && 'baz']),
    ).toStrictEqual({
      className: 'foo bar baz',
    });
  });
});

describe('only one objects', () => {
  test('classnames with empty object', () => {
    expect(classnames({})).toStrictEqual({});
  });
  test('classnames with object with true value', () => {
    expect(classnames({ foo: true })).toStrictEqual({
      className: 'foo',
    });
  });
  test('classnames with object with mixed boolean value value', () => {
    expect(classnames({ foo: true, bar: false })).toStrictEqual({
      className: 'foo',
    });
  });

  test('classnames with object with mixed  value value', () => {
    expect(
      classnames({
        foo: 'hiya',
        bar: 1,
        baz: undefined,
        bal: null,
        '-foo': true,
      }),
    ).toStrictEqual({ className: 'foo bar -foo' });
  });
});

describe('only multiple objects', () => {
  test('classnames empty objects', () => {
    expect(classnames({}, {})).toStrictEqual({});
  });
  test('classnames with objects with true value', () => {
    expect(classnames({ foo: true }, { bar: true })).toStrictEqual({
      className: 'foo bar',
    });
  });
  test('classnames with objects with mixed boolean value value', () => {
    expect(
      classnames(
        { foo: true, bar: false },
        {},
        { foo: false, bar: false },
        {},
        { foo: false, bar: true },
        {},
      ),
    ).toStrictEqual({ className: 'foo bar' });
  });
  test('classnames with objects with mixed  value value', () => {
    expect(
      classnames(
        {
          foo: 'hiya',
          bar: 1,
        },
        { baz: undefined, bal: null, '-foo': true },
      ),
    ).toStrictEqual({ className: 'foo bar -foo' });
  });

  test('classnames with mixed falsy and truthy value', () => {
    expect(
      classnames({
        // falsy:
        null: null,
        emptyString: '',
        noNumber: NaN,
        zero: 0,
        negativeZero: -0,
        false: false,
        undefined,

        // truthy (literally anything else):
        nonEmptyString: 'foobar',
        whitespace: ' ',
        function: Object.prototype.toString,
        emptyObject: {},
        nonEmptyObject: { ab: 1, bc: 2 },
        emptyList: [],
        nonEmptyList: [1, 2, 3],
        greaterZero: 1,
      }),
    ).toStrictEqual({
      className:
        'nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero',
    });
  });
});
