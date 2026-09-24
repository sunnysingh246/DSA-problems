//1st approach
const isAnagram = function (s, t) {
    s = s.split('').sort().join("")
    t = t.split('').sort().join("")

    return s === t
}

//console.log(isAnagram("anagram", "nagaram"))



//2nd approach
const isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false

    obj1 = {}
    obj2 = {}

    for (let i = 0; i <= t.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1
        obj2[t[i]] = (obj1[t[i]] || 0) + 1
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false
    }

    return true
}

console.log(isAnagram("anagram", "nagaram"))