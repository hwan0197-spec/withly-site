# withly-site

**주식회사 위슬리(Withly Co., Ltd.) 회사 홈페이지**와 **Withly TOPIK** 공개 문서. GitHub Pages로 **https://with-ly.kr** 에 서비스합니다.

앱 저장소(`topik-writing`)는 비공개라 Pages를 켤 수 없어 이 저장소를 따로 두었습니다.
여기에는 **공개해도 되는 문서만** 둡니다 — 앱 코드·프롬프트·문항·키는 넣지 않습니다.

| 파일 | 내용 |
|---|---|
| `index.html` | 회사 홈페이지 — 소개·서비스·특징·회사 정보 (ko 정본 / ja / en) |
| `privacy.html` | 개인정보처리방침 (ko 정본 / ja / en) |
| `terms.html` | 이용약관 (ko 정본 / ja / en) |
| `support.html` | 지원·문의·자주 묻는 것 (ko 정본 / ja / en) |
| `style.css` | 앱 `theme.dart`의 색·간격 토큰을 옮긴 것 |
| `lang.js` | 언어 전환 (없어도 세 언어가 모두 보입니다) |
| `favicon.svg` | W 글자 아이콘 |

## 지금 상태

- **내부 상태 (페이지에는 표시하지 않음)** — 개인정보처리방침·이용약관·지원 세 문서는 아직 **법률 검토 전**이고,
  **일본어는 네이티브 검수 전**입니다. 2026-09-11 Apple Developer 등록이 "웹사이트 최소 콘텐츠/미작동"으로 철회되어,
  페이지 머리의 초안 상자를 앞당겨 떼고 "최종 개정 2026-09-10" 한 줄로 바꿨습니다. 검토·검수가 끝나면 본문을 고치고 개정일을 올립니다.
- 한국어가 정본이며 해석이 갈리면 한국어를 따릅니다(ja·en 페이지 머리에 한 줄로 밝혀 둠).
- 도메인 **with-ly.kr** (가비아, 2026-09-11, 자동연장). `CNAME` 파일과 Pages 설정에 넣었고 DNS는 A 4개(GitHub Pages IP)·CNAME(www)입니다.
  옛 주소 `hwan0197-spec.github.io/withly-site/`는 새 도메인으로 301 됩니다.
- **DNS·TLS는 Cloudflare(무료), 원본은 GitHub Pages, GitHub의 Enforce HTTPS는 사용하지 않습니다** (2026-09-11).
  GitHub Pages 인증서가 `bad_authz`로 1시간 넘게 발급되지 않아 전환했습니다. 네임서버 `blair`·`louis.ns.cloudflare.com`,
  프록시 On, SSL 모드 **Full**(원본이 `*.github.io` 인증서를 내밀어 Full (strict)는 안 됩니다), Always Use HTTPS On.
  Pages의 `cname`과 이 저장소의 `CNAME` 파일은 GitHub이 요청을 이 사이트로 보내는 데 필요하므로 **지우지 않습니다**.
  GitHub의 Enforce HTTPS를 켜면 Cloudflare와 리디렉션이 겹칠 수 있어 꺼 둡니다.

## 원문

한국어 원문은 앱 저장소의 `docs/개인정보처리방침_초안.md`·`docs/이용약관_초안.md`에 있습니다.
**고칠 때는 원문과 이 저장소를 함께 고칩니다.** (원문에만 있는 "검토가 필요한 사항"은 내부 메모라 공개본에 넣지 않습니다.)
