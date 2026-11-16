# 대림 아이제이팩 홍보 사이트

Next.js 16 (App Router, TypeScript) one-page site, built from the claude.ai design
`templates/promo-page/PromoPage.dc.html`.

## 개발

```bash
npm install
cp .env.example .env.local   # 값 채우기
npm run dev                  # http://localhost:3000
npm run lint && npm run build
```

`public/assets` 의 이미지를 같은 파일명으로 교체했다면 `npm run clean:images` 로 이미지 최적화 캐시를 지우세요.
(캐시는 서버 쪽에 남기 때문에 브라우저 시크릿 모드로도 갱신되지 않습니다. 새로 배포하면 자동으로 비워집니다.)

## 배포 (Vercel 권장)

1. 이 폴더를 GitHub 저장소에 push
2. [vercel.com](https://vercel.com) → New Project → 저장소 선택 (Framework: Next.js, 설정 변경 없음)
3. Environment Variables 에 `.env.example` 항목 입력
4. Deploy → 도메인 연결 (Settings → Domains) 후 `NEXT_PUBLIC_SITE_URL` 을 실제 도메인으로 맞추고 재배포

Node 서버가 있는 다른 호스팅도 `npm run build && npm start` 로 동작합니다.
견적문의 API(`/api/quote`)와 이미지 최적화 때문에 정적 export 는 사용하지 않습니다.

## 견적문의 메일

`/api/quote` 가 [Resend](https://resend.com) 로 메일을 보냅니다.
Resend 에서 발신 도메인을 인증한 뒤 `RESEND_API_KEY`, `QUOTE_TO_EMAIL`, `QUOTE_FROM_EMAIL` 을 설정하세요.
설정 전에는 접수되지 않으며, 폼이 전화 문의를 안내합니다.

## 구조

| 경로 | 내용 |
| --- | --- |
| `src/app/page.tsx` | 섹션 조립 |
| `src/app/layout.tsx` | 폰트(Noto Sans KR, IBM Plex Mono), SEO 메타데이터 |
| `src/components/` | 섹션 컴포넌트. `Header`, `Portfolio`, `QuoteForm`, `Counter`, `ScrollReveal`, `LangProvider` 만 클라이언트 컴포넌트 |
| `src/data/content.ts` | 납품사례(76건)·고객사(12곳) 목록 — 항목 추가/수정은 여기서 |
| `src/data/imageSizes.ts` | `public/assets` 이미지 픽셀 크기 (이미지 추가 시 함께 갱신) |
| `public/assets/` | 원본 이미지 |

국/영 문구는 `<span data-ko>` / `<span data-en>` 쌍으로 작성하고, `#site` 의 `lang-*` 클래스로 하나만 보입니다.

## 남은 작업

- 견적문의 「담당 연락처」의 이메일이 디자인 그대로 "이메일 주소 확인 필요" 자리표시자입니다 (`src/components/ContactAside.tsx`).
