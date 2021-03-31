const users = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
}]

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validateEmail = (email) => re.test(String(email).toLowerCase());


const validateUsers = (users) => {
    const obj = {}
    obj.traineeEmail = (validateEmail(users[0].traineeEmail))
    obj.reviewerEmail = (validateEmail(users[0].reviewerEmail))
    const data = Object.values(obj)
    let valid_users_count = 0
    let invalid_users_count = 0
    let valid_users = ""
    let invalid_users = "0"
    data.forEach(el => {
        if (el === true) {
            valid_users_count += 1
            if (Object.values(obj).length >= 1) {
                const keys = Object.keys(obj)
                valid_users = keys.filter(key => obj[key]);
            } else {
                valid_users = "zero"
            }

        } else {
            invalid_users_count += 1
            if (Object.values(obj).length >= 1) {
                invalid_users = users[0]
            }

        }

    })

    console.log("  valid users ", valid_users, "counts", valid_users_count)

    console.log(" invalid users", invalid_users, "counts ", invalid_users_count)
}
validateUsers(users)