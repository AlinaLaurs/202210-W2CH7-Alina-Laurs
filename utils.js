export const strictEquals = (a, b) => {
    let result = Object.is(a, b);
    if (Object.is(a, NaN) || Object.is(b, NaN)) result = false;
    if (Object.is(a, 0) && Object.is(b, -0)) result = true;
    if (Object.is(a, -0) && Object.is(b, 0)) result = true;
    return result;
};
