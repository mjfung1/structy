


const flatten = (arr) => {
    const flat = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            flat.push(...flatten(item));
        } else {
            flat.push(item);
        }
    }
    

    return flat;
};