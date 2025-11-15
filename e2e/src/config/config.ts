
export default function setUpTestdata (suite: string) {
    const testDataPath = `../fixtures/${suite}/testdata`;
    console.log(`Loading tesdata from: ${testDataPath}`);
    return require(testDataPath).default;
}