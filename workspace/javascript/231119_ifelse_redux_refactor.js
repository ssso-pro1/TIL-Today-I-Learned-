// reducer

const store = (() => {
    let state;
    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
        },
        // dispatch: action 받아서 현재 상태 state와 action 을 reducer 함수에 넘겨서 그 응답값을 다시 state에 변경하도록
    };
})();
const initialState = {todos: []};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [action.data, ...state.todos],
            };
        case 'updateTodo': {
            const newTodos = [...state.todos];
            newTodos.splice(action.targetIndex, 1, action.data);
            return {
                ...state,
                todos: newTodos
            };
        }
        case 'removeTodo': {
            const newTodos = [...state.todos];
            newTodos.splice(action.targetIndex, 1);
            return {
                ...state,
                todos: newTodos
            };
        }
        default:
            return state;
    }
};

store.dispatch({type: 'addTodo', data: 'new1'});
console.log(store.getState());

// 1. 객체로 변경하기 (아직은 switch 문 보다 복잡한 단계)
const reducer = (state = initialState, action) => {
    const reducerMap = {
        'addTodo': () => ({
            ...state,
            todos: [action.data, ...state.todos],
        }),
        'updateTodo': () => {
            const newTodos = [...state.todos];
            newTodos.splice(action.targetIndex, 1, action.data);
            return {
                ...state,
                todos: newTodos
            };
        },
        'removeTodo': () => {
            const newTodos = [...state.todos];
            newTodos.splice(action.targetIndex, 1);
            return {
                ...state,
                todos: newTodos
            };
        },
    }
        return reducerMap[action.type]?.() || state;
};

// 2. 객체로 변경 후 action property 구조분해할당
const reducerMap = {
    // 'addTodo': (state, action) => ({
    'addTodo': (state, { data }) => ({ // action 의 data 라는 property 만 사용
        ...state,
        // todos: [action.data, ...state.todos],
        todos: [data, ...state.todos],
    }),
    // 'updateTodo': (state, action) => {
    'updateTodo': (state, { targetIndex, data }) => {
        const newTodos = [...state.todos];
        newTodos.splice(targetIndex, 1, data);
        return {
            ...state,
            todos: newTodos
        };
    },
    // 'removeTodo': (state, action) => {
    'removeTodo': (state, { targetIndex }) => {
        const newTodos = [...state.todos];
        newTodos.splice(targetIndex, 1);
        return {
            ...state,
            todos: newTodos
        };
    },
}
// action 내의 property 구조분해할당으로 변경
// -> reducer 가 길어지게 될 때, action 안에 어떤 property 가 들어오는지 확인할 수 있는 것만으로도 큰 장점임. 가독성이 올라감.
const reducer = (state = initialState, action) => {
    return reducerMap[action.type]?.(state, action) || state;
};

/*
- if else가 중복되면 switch case로 바꿔보자
    -> 나름의 규칙성을 발견하기 쉬워짐
    -> 규칙을 발견하면 이를 바탕으로 객체로 추출 가능

    -> 객체를 함수 외부로 분리하면 공통 로직/ 분기별 실제동작정의가 분리되어 읽기도 수월해지고,
    수정사항이 생겨도 공통로직은 건드리지 않아도 되어 편리함.

    - 리팩토링할 소재를 발견할 수도 있고,
    - 소재가 발견되지 않더라도 객체형태로 전환하 그 자체로 이미 꽤 깔끔함

    -> 분기가 함수일 경우 구조분해할당 => 상황별로 필요한 데이터 파악이 한결 용이해짐

    이런 리팩토링을 습관화하다보면
    나중에는 처음부터 switch 문으로 작성하거나 객체형태로 작성하게 됨!
    
    https://www.youtube.com/watch?v=4I-MiMmZdcQ&list=PLjQV3hketAJmtfUlEiL6Aodbyed6aYnKL&index=4
 */