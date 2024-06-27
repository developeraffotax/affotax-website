export function getFormData(formData, ...names) {

    let dataObject = {};

    names?.forEach((el) => {
        console.log(formData)
        let value = formData?.get(el);
        dataObject[el] = value;
    })

    return dataObject;
}