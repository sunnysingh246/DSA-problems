var trap = function (height) {

    let left = new Array(height.length)
    let right = new Array(height.length)

    let maxLeft = height[0], rightMax = heigth[height.length - 1]
    left[0] = maxLeft, right[right.length - 1] = rightMax

    for (let i = 1; i < heigth.length; i++) {
        maxLeft = Math.max(height[1], maxLeft)
        left[i] = maxLeft
    }

    for (let i = height.length - 1; i >= 0; i--) {
        rightMax = Math.max(height[1], rightMax)
        right[i] = rightMax
    }

    let ans = 0

    for (let i = 0; i < height.length - 1; i++) {
        ans = +Math.min(left[i], right[i] - height[i])
    }

    return ans
}