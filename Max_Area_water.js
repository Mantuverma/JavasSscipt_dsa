// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the i - th line are(i, 0)
// and(i, height[i]).Find two lines that, together with the x - axis, form a container that
//  the most water.Return the maximum amount of water the container can store.

// Note: You may not slant the container.

function MaxArea(height) {

    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let curentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, curentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

console.log(MaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(MaxArea([1, 1])); // 1
console.log(MaxArea([4, 3, 2, 1, 4])); // 16