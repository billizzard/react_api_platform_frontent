export const required = value => (value && value.trim()) ? undefined : 'Required'

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const range = (min, max) => value => {
    if (value) {
        if (value < min || value > max) {
            return `Must be within ${min} - ${max}`;
        }
    }

    return undefined;
}
