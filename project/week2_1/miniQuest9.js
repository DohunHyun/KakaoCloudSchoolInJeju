const applyDiscount = (age) => {
    if (age <= 0) {
        console.log('올바른 나이를 입력해주세요.');
        return;
    } else {
        if (age < 20) {
          // 할인 로직
          console.log('20% 미성년자 할인이 적용됩니다.');
          return;
        } else {
          console.log('할인이 적용되지 않습니다.');
        }
    }
  };