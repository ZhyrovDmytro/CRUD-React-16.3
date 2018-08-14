export default {
    name: {
        firstName: ({ value }) => /^[a-z A-Z]+$/.test(value),
    },
};
