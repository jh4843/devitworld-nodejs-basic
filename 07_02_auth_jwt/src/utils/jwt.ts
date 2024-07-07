import jwt from "jsonwebtoken";

const secretKey = "your-secret-key"; // 비밀 키는 환경 변수로 관리하는 것이 좋습니다.

/**
 * JWT 생성 함수
 * @param payload - JWT에 포함될 데이터
 * @param expiresIn - JWT의 만료 시간 (기본값: '1h')
 * @returns 생성된 JWT
 */
export const generateToken = (
  payload: object,
  expiresIn: string | number = "1h"
): string => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

/**
 * JWT 검증 함수
 * @param token - 검증할 JWT
 * @returns 검증된 데이터 또는 오류 메시지
 */
export const verifyToken = (token: string): object | string => {
  try {
    var res = jwt.verify(token, secretKey);

    console.log(res);

    return res;
  } catch (error) {
    console.error(error);
    return "Invalid token";
  }
};
