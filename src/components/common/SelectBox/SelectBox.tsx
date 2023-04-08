import { useState, forwardRef } from 'react';
import { styleRoot } from './SelectBoxStyle';
import { Icon } from '@components/index';
import { IconType } from '@types';

interface SelectBox {
  options: string[];
  defaultOption?: string;
  defaultIcon?: IconType;
  defaultImg?: IconType;
  index: number;
  selectedData: string | null;
  _onChange: (option: string) => void;
}

const SelectBox = forwardRef((props: SelectBox, ref: any) => {
  const {
    options,
    defaultOption,
    defaultIcon,
    defaultImg,
    index,
    _onChange,
    selectedData,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  function clickSelectBtn() {
    setIsOpen(!isOpen);
  }

  function selectOption(e: any) {
    const option = e.currentTarget.innerText;
    _onChange(option);
    setIsOpen(!isOpen);
  }

  function handleBlur(e: any) {
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setIsOpen(false);
  }

  return (
    <div className={styleRoot} tabIndex={index} onBlur={handleBlur}>
      <button className="select-btn" onClick={clickSelectBtn}>
        {selectedData ?? (
          <div className="select-btn-value">
            {defaultIcon && <Icon name={defaultIcon}></Icon>}
            {defaultImg && <Icon name={defaultImg} isImg size={16}></Icon>}
            {defaultOption}
          </div>
        )}
        <Icon
          name={isOpen ? 'chevron_up' : 'chevron_down'}
          size={24}
          fill="var(--gray-700)"
        ></Icon>
      </button>
      {isOpen && (
        <div className="option-container">
          {options.map((data, i) => {
            return (
              <div className="option" key={i} onClick={(e) => selectOption(e)}>
                {data}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default SelectBox;
