export default {
    reg: {
        name: /^.{2,30}$/,
        payment: /^([1-9]{1}([0-9])?){1,10}(.[0-9]{1,2})?$/,
        duration: /^([1-9]{1}([0-9]{1,4})?)$/,
        description: /.{10,255}/
    },
    validate(regex, string) {
        return regex.test(string);
    }

}