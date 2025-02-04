import { DateTime } from 'luxon';
import { Vector2 } from '../../math/Vector2';
import { Vector3 } from '../../math/Vector3';
import { Rotation } from '../../math/Rotation';
import { ORIGINAL_OBJECT } from '../../bots/BotCalculations';

export const customDataTypeCases = [
    [
        'DateTime',
        DateTime.utc(1999, 11, 19, 5, 42, 8),
        '📅1999-11-19T05:42:08Z',
    ] as const,
    ['Vector2', new Vector2(1, 2), '➡️1,2'] as const,
    ['Vector3', new Vector3(1, 2, 3), '➡️1,2,3'] as const,
    ['Rotation', new Rotation(), '🔁0,0,0,1'] as const,
];

export const allDataTypeCases = [
    ...customDataTypeCases,
    ['Number', 123, 123] as const,
    ['true', true, true] as const,
    ['false', false, false] as const,
    ['String', 'abc', 'abc'] as const,
    ['Infinity', Infinity, Infinity] as const,
    ['-Infinity', -Infinity, -Infinity] as const,
    ['Object', { abc: 'def' }, { abc: 'def' }] as const,
    ['Array', [1, 2, 3], [1, 2, 3]] as const,
];
