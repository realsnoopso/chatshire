import { useState, forwardRef } from 'react';
import { styleRoot } from './SelectBoxStyle';
import { Icon } from '@components/index';
import { IconType } from '@types';

interface SelectBox {
  options: string[];
  defaultOption?: string;
  defaultIcon?: IconType;
}

const SelectBox = forwardRef((props: SelectBox, ref: any) => {
  const { options, defaultOption, defaultIcon } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  function clickSelectBtn() {
    setIsOpen(!isOpen);
  }

  function selectOption(e: any) {
    const option = e.currentTarget.innerText;
    setSelectedData(option);
    setIsOpen(!isOpen);
  }

  function handleBlur(e: any) {
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setIsOpen(false);
  }

  return (
    <div className={styleRoot} tabIndex={0} onBlur={handleBlur}>
      <button className="select-btn" onClick={clickSelectBtn}>
        {selectedData ?? (
          <div className="select-btn-value">
            <Icon name={defaultIcon ?? 'emptyImg1'}></Icon>
            {defaultOption}
          </div>
        )}
        <Icon
          name={isOpen ? 'chevron_up' : 'chevron_down'}
          size={20}
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
