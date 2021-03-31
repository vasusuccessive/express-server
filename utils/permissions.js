const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}


const data = Object.values(permissions)

const hasPermission = (search) =>
    data.filter(obj => console.log(obj.all.includes(search.all) &&
        obj.read.includes(search.read) &&
        obj.write.includes(search.write) && obj.delete == search.delete))


hasPermission({
    all: 'head-trainer',
    read: 'trainee',
    write: 'trainer',
    delete: ""
})