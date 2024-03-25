function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (let i = 0; i < sizes.length; i++) {
        let width = Math.max(...sizes[i]);
        let height = Math.min(...sizes[i]);

        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
    }

    return maxWidth * maxHeight;
}