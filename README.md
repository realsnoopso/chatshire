# 미리보기
![Screen Recording 2023-04-09 at 5 35 50 PM](https://user-images.githubusercontent.com/96381221/230763390-691e2f3a-8ced-48f9-9fe5-02716c426c27.gif)

# 프로젝트 개요

ChatGPT3.5를 이용해 내가 원하는 블록체인 데이터를 조회하기 위한 SQL 쿼리문을 제공하고, 조회한 결과까지 보여주는 서비스입니다. `2023.3.13~2023.4.9`까지 약 한달 동안 주말을 이용해 짬짬히 진행되었습니다. 

# 기획서

[기획서 바로보기](https://puzzle-roarer-58b.notion.site/f36f51d937c047a2a6028dbecd8528ba?pvs=4)

# 프로젝트 기능
- 원하는 체인과 아이템을 선택, prompt를 입력하면 이에 해당하는 Qeury 문을 생성할 수 있다.
- Query 문을 확정시키면 해당 쿼리 문을 실행, 블록체인 데이터 중 원하는 결과값을 확인할 수 있다.

# 팀원
- 소민경 (디자인 및 프론트엔드)
- 윤기훈 (기획)
- 박진형 (백엔드)

# 기술 스택

라이브러리: `React.js`,
언어: `Typescript`,
프레임워크: `Next.js`

# 설치 및 실행 방법

`pnpm i`, `pnpm run dev`를 통해 로컬 서버를 실행해보실 수 있습니다.

# 개인적인 경험 및 느낀점
## 개발자로서 첫 해커톤 참여
이 프로젝트는 개발자로서는 처음 참여한 해커톤이라 더 뜻깊은 프로젝트였습니다. 제가 디자이너였을 때부터 해커톤을 함께한 친구들과 함께 도쿄로 날아가 참여를 했는데, 밤을 새다 코피를 흘리는 등(ㅠㅠ) 건강상의 이슈에도 불구하고 완성을 해내 제출을 했다는 점에서 수상 여부와 관계 없이 오래 기억에 남을 프로젝트였습니다. 또 현장에 있던 시니어 개발자들의 피드백을 받아 추가 기능을 붙였던 것도 저에게는 의미있는 경험이었습니다.
## 새로운 기술들과의 만남
ChatGPT를 API로 사용하려면 어떤 식으로 활용해야 하는지 이해할 수 있었던 프로젝트였습니다. API에 기본 Prompt를 어떻게 입력하느냐에 따라 다른 결과를 보일 수 있다는 점이 흥미로웠고, 더 다양한 곳에 이를 활용할 수 있겠다는 생각이 들었습니다. 또, 이번 프로젝트는 DB가 필요하지 않아 별도의 서버를 띄우지 않고 Next.js를 `API Routes`라는 기술을 이용해 API를 작성하게 되었습니다. 서버가 없이, 백엔드 코드의 분리 없이도 이렇게 API를 작성할 수 있다는 점에서 굉장히 간편하다고 느껴졌습니다. 추후 간단한 API를 작성할 일이 있다면 활용해보아도 좋겠다는 생각이 들었습니다.
## 개선하고 싶은 점
SQL 구문을 입력하면 블록체인 데이터를 조회해 결과 값을 주는 `Flipside`라는 서비스의 API의 응답 속도가 3분 이상 걸리기 때문에, 사용자들이 불편함을 느끼는 것을 확인할 수 있었습니다. 만약 추후 이 서비스를 업데이트할 기회가 있다면 이 부분의 UX를 개선해보고 싶습니다. 생각해본 개선 아이디어는 사용자 이메일을 입력하면 결과를 사용자 이메일로 보내주는 UX를 추가하는 것입니다. `Flipside` API 자체를 우리가 개선할 수는 없으니 사용자가 지연을 경험하는 것을 최대한 줄이는 것이 포인트라고 생각했습니다. 때문에 결과를 이메일로 받아볼 수 있도록 하면 해당 화면에서 하염없이 기다릴 필요가 없어져, 문제가 해결될 것이라고 생각했습니다. 또한, 사용자 정보를 수집할 수 있는 점에서도 좋은 방법이라고 생각했습니다.
