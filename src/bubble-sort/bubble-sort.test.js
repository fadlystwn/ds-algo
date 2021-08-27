import bubbleSort from './bubble-sort';

test('Bubble sort ', () => {
    expect(bubbleSort([3, 4, 1, 5, 2])).toBe([1, 2, 3, 4, 5])
})