export const validate = (data) => {

    const errors = {}


    // password Validate
    if (!data.oldPassword) {
        errors.oldPassword = 'Password required'
    }
    if (!data.password) {
        errors.password = 'Password required'

    } else if (data.password.length < 6) {
        errors.password = 'Password need to be 6 character or more'
    } else {
        delete errors.password
    }


    if (!data.confirmPassword) {
        errors.confirmPassword = 'Confirm the password '

    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = '  Password do not match'
    } else {
        delete errors.confirmPassword
    }

    return errors

}