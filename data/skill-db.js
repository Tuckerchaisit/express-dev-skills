const skills = [
  {text: 'JavaScript', level: true, _id: 125223},
  {text: 'CSS', level: false, _id: 127904},
  {text: 'HTML',level: false, _id: 139608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No todo was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

export { 
	find,
  findById
}