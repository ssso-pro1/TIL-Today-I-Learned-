# [Open AI Dev Day, Opening Keynote (Sam Altman)](https://www.youtube.com/watch?v=U9mJuUkhUzk)

본 세션에서는 OpenAI가 GPT4 Turbo라는 새로운 모델을 소개하며 이전 버전에 대한 여러 가지 개선 사항과 미래 계획에 대해 소개한다. 해당 모델은 사용자 피드백을 기반으로 보완되었으며 더욱 길어진 문맥 길이, 높은 정확성, 더 많은 제어(함수 호출 등), 확장된 지식, 새로운 모달리티 지원(텍스트 음성 변환), 사용자 정의 가능한 GPTs 모델, 그리고 높은 호출 속도 등의 특징이 있다. 

## 1. 새로운 GPT-4 Turbo 모델 소개
GPT4 Turbo는 사용자들의 다양한 피드백을 반영하여 개발된 새로운 언어 모델로 다양하게 기능이 향상되었다. 

#### 1-1) Context Length
첫 번째로, GPT-4 Turbo에서는 보다 긴 문맥을 처리할 수 있는 능력이 향상되었다. 이전보다 문맥 길이가 16배 증가하여 128,000 토큰까지 처리할 수 있어 사용자의 다양한 작업에 더욱 유연하게 대응할 수 있게 되었다. 가격 또한 낮춰져 높은 성능을 더 저렴한 비용으로 경험할 수 있게 되었다.

#### 1-2) More control
개발자들은 모델과 동작 개발자들은 모델의 동작과 출력 값에 대한 더 많은 통제권을 요구해왔다. 이에 따라 다양한 방법을 마련하였는데, 그 중 하나는 새로운 기능 'JSON 모드’이다. 이를 통해 출력 값을 더욱 깔끔하게 받을 수 있으며 데이터 관리 및 호출이 더욱 용이 해졌다. 또한 함수 호출 시, 이제는 한 문장으로 여러 개의 기능을 동시에 불러올 수 있어, 결과 값을 손쉽게 재현할 수 있다.  

#### 1-3) Better knowledge
다음으로는, 더 나은 지식의 반영을 위하여 검색 시스템이 도입되었다. 외부 문서나 DB를 연결하면 GPT의 학습에 반영된다. 특수한 분야에 대해 본인이 추가로 지식을 추가하고 싶은 내용에 대해 학습시킬 수 있게 된 것이다. 또한 기존의 2021년 9월의 지식에 멈추어 있던 GPT-4와 다르게 turbo는 2023년 4월까지의 지식을 지원하며, 새로운 지식을 계속해서 학습할 예정이다.

#### 1-4) New modalities
또한 Dali-e-3 (이미지 생성 모델), GPT-4 Turbo 버전의 시각 인식 모델, 발전한 음성에서 문자로의 변환 기능 (TTS)의 modalities 가 추가될 예정이다. Turbo는 시각 인식 모듈을 통해 이미지 분석이 가능하다. 
	
 한 예로 ‘Be My Eyes’ 라는 서비스는 이미지 인식 기술을 통해 시각장애인의 물체 인식을 돕는다. 새로운 TTS 모델에 쓰인 목소리는 6개로, 이전 모델에 비해 훨씬 자연스러워져, 해당 기술을 통해 서비스와 사용자 사이에 더욱 자연스러운 소통이 가능 해졌다고 할 수 있다. 이 기능을 응용해서 새로운 언어를 배우거나, 음성 어시스턴트 기능을 향상시킬 수도 있다. TTS 와 반대로, 음성을 인식해 텍스트로 기록하는 ‘Whisper v3’ 모델의 최신 버전 또한 제공할 예정이다.

#### 1-5) Higher rate limits
GPT-4의 분당 처리 속도를 2배 높이며, 정보 처리 속도가 더욱 빨라져 더욱 편하게 사용이 가능 해졌다. 약 3000 개의 단어까지 처리가 가능했던 GPT4가 이제는 300 페이지의 분량으로 늘어나며 더욱 더 풍부한 프롬프트를 제시할 수 있게 되었다.
    
## 2. GPTs 소개
GPTs는 chat GPT를 사용자의 목적에 맞게 맞춤 화할 수 있는 새로운 기능이다. Chat GPT를 기반으로 하되, 사용자가 직접 모델의 특성을 결정할 수 있도록 지원하는 기능이다. GPT Store를 통해 개발자들은 자신이 만든 모델을 공유하고, 다른 사용자들이 검색하여 사용할 수 있게 된다. 또한, 기업 내에서 사용할 수 있는 사설 GPTs를 생성하는 기능도 제공되어 기업 내부에서 특화된 언어 모델을 개발할 수 있게 된다. 

사용법을 간단하게 소개해보자면, 현재 Code.org 라는 단체는 더 많은 학생들이 컴퓨터 공학을 공부할 수 있게 돕고 있다. Code.org는 선생님들이 더 쉽게 수업을 준비할 수 있게 ‘나만의 조교 GPT’를 만들었다. 이 GPT 모델은 교사들이 중학생들에게 프로그래밍의 개념을 더욱 창의적으로 흥미롭게 설명할 수 있도록 도와준다. 교사가 ‘루프(loops)’에 대해 창의적인 방식으로 설명하라고 요청하면, 모델은 비디오 게임 캐릭터가 동전을 반복해서 줍는 상황으로 설명을 한다. 또한 이 GPT는 code.org의 교육 과정과 전문성을 활용하여 교사가 필요에 맞게 모델을 신속하게 조정하고 적용할 수 있도록 한다. 
    
## 3. Assistants API 소개
Assistants API는 오픈에이아이의 새로운 API 중 하나로, 사용자가 자신의 애플리케이션에 간단하게 어시스턴트 기능을 추가할 수 있도록 지원한다. Persistent threads, 코드 인터프리터, 등을 포함하여 복잡한 어시스턴트 경험을 구축하는 데 필요한 도구들을 쉽게 사용할 수 있도록 한다. 또한, 사용자의 문서나 파일에서 정보를 검색하고 코드를 실행하여 더욱 강력한 어시스턴트를 만들 수 있다.

## 결론
  이처럼 Open AI에서 Chat GPT를 선보인 약 1년 만에 GPT-에 이어서 GPT-4 Turbo 및 GPTs 등의 기술을 계속해서 선보이고 있다. 현재 Open AI는 GPT 5.0을 개발하는 것이 아닌, GPT 4.0의 기능 추가 및 비용 절감을 위해 개발하고 있다고 한다. 이로써 Open AI는 경쟁사들 과의 격차를 더욱 넓히며, AI 챗 봇 시장에서의 선두자로서 기술 개발의 효율성과 비즈니스 적인 통찰력까지 보여주고 있다. 
	
  특히 프로그래밍 없이 모델에 지시를 내리며 지침을 만들어 주면 직접 새로운 모델을 커스터마이징 할 수 있다는 것은 매우 충격적이었다. 이렇게 만든 GPT는 사용자가 개인적으로 사용도 가능하지만, 현재 Open AI에서 준비 중인 GPT Store에 런칭하여 실제로 수익을 낼 수도 있도록 한다. 즉, 내가 만든 나만의 GPT를 공유하고 실제 수익 모델로도 확장할 수 있다는 것인데, 이는 곧 사용자 참여와 공유를 촉진하면서 시장에서의 지위를 강화할 것으로 기대된다. 이러한 전략은 GPT의 시장 점유율을 확대하고 AI 생태계를 구축하는데 매우 효과적인 방법이라고 생각한다. 
이 모든 것이 Chat GPT를 발표한지 불과 1년 만에 이룬 결과라고 생각하면, 기술의 고도화는 빠르게 진행되고 있으며, 이를 효과적으로 활용하는 능력은 더욱 더 중요해질 것이라고 생각한다. 
	
 Chat GPT 유료 버전을 사용해볼 생각은 없었지만, GPTs로 나만의 chat bot을 만들어 보고 싶다는 생각이 들었다. 기술 시장의 빠른 변화에는 두려움이 따르지만, 한 편으로는 ‘Be My Eyes’와 같이 사람들에게 도움이 되는 기술이 개발되는 것은 긍정적인 방향이라고 생각한다. 이러한 모델을 활용하여 임상 시장에 혁신적인 기술을 적용할 수 있는 가능성에 대한 고민을 하는 시간이 되었다.
이러한 기술의 발전과 활용은 미래에 더 많은 기회와 도전을 가져올 것으로 기대한다. 기술을 통해 사회적 가치를 창출하고 발전시키는 노력은 지속적으로 이루어져야 할 중요한 일이라고 생각한다.
