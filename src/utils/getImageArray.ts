import fs from 'fs';

// 스티거 불러오기
const getImageArray = (dir: string, type: string) => {
    const files = fs.readdirSync(dir); // 파일 목록 읽기
    return files
        .filter((file) => file.match(/\.(png|jpg|jpeg|gif)$/)) // 이미지 파일만 필터링
        .map((file) => `/assets/stickers/${type}/${file}`); // URL 변환
};

export default getImageArray;
