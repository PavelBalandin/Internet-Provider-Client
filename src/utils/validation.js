export default {
    reg: {
        name: /^[A-Za-zа-яА-ЯІіЇїЕеЄєь]{2,30}$/,
        payment: /^([1-9]{1}([0-9])?){1,10}(.[0-9]{1,2})?$/,
        duration: /^([1-9]{1}([0-9])?){1,3}$/,
        description: /.{10,255}/
    },
    validate(regex, string) {
        return regex.test(string);
    }

}