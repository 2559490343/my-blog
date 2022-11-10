import { Ref, FC, useState, useEffect, forwardRef } from 'react';
import isNil from 'lodash/isNil';
import { Select, Spin, Empty } from 'antd';
import {
  SelectProps as AntSelectProps,
  SelectValue,
  RefSelectProps,
} from 'antd/lib/select';
import useDeepUpdateEffect from '@/hooks/useDeepUpdateEffect';
import cn from 'classnames';
import styles from './AutoSelect.module.less';

interface Item {
  key?: string;
  label: string;
  value: string | number;
  [paramName: string]: unknown;
}

interface Datalist {
  list: Array<Item>;
  total: number;
}

interface ReSult {
  success: boolean;
  data: Datalist;
}

interface SelectProps<VT extends SelectValue = SelectValue>
  extends AntSelectProps<VT> {
  options?: Array<Item>; // 配置的options 不走异步请求
  request?: (params?: unknown) => Promise<ReSult>; // api请求
  params?: Record<string, unknown>; // 请求方法的参数，无参数可不传
  config?: Item; // 配置接口字段对应 Select 的 label/value
  defaultSelectFirstOption?: boolean; // 请求options时,默认选择第一个选项(该属性必须在完全受控模式下才会生效)
}

const AutoSelect: FC<SelectProps> = forwardRef(
  (props, ref: Ref<RefSelectProps>) => {
    const [selectOptions, setSelectOptions] = useState<Array<Item> | undefined>(
      undefined
    );
    const [fetching, setFetching] = useState(false);
    const {
      options,
      request,
      params,
      config,
      value,
      onChange,
      placeholder,
      defaultSelectFirstOption,
      allowClear,
      mode,
      ...otherProps
    } = props;

    const getOptions = async () => {
      if (request) {
        setFetching(true);
        const {
          data: { list },
        } = await request({ ...params });
        let transOptions: Array<Item>;
        if (config) {
          transOptions =
            list.map((item) => ({
              label: item[config.label] as string,
              value: item[config.value] as string,
            })) || [];
        } else {
          transOptions = list || [];
        }
        setSelectOptions(transOptions);

        if (defaultSelectFirstOption && typeof onChange === 'function') {
          // 请求options时, 默认选择第一个选项
          onChange(transOptions[0]?.value, transOptions);
        }

        setFetching(false);
      } else {
        setSelectOptions(options);
      }
    };

    useEffect(() => {
      if (!isNil(value) && !selectOptions) {
        getOptions();
      }
    }, [value]);

    useEffect(() => {
      if (defaultSelectFirstOption && !selectOptions) {
        getOptions();
      }
    }, [defaultSelectFirstOption]);

    useDeepUpdateEffect(() => {
      getOptions();
    }, [params]);

    const handleOnDropdownVisibleChange = (open: boolean) => {
      if (open && !selectOptions) {
        getOptions();
      }
    };

    return (
      <Select
        ref={ref}
        placeholder={placeholder || '请選擇'}
        allowClear={allowClear}
        showArrow
        loading={fetching}
        notFoundContent={
          fetching ? (
            <Spin size="small" />
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )
        }
        onDropdownVisibleChange={handleOnDropdownVisibleChange}
        value={selectOptions ? value : undefined}
        onChange={onChange}
        options={selectOptions}
        optionFilterProp="label"
        showSearch
        popupClassName={cn({ [styles.singleSelect]: !!!mode })}
        mode={mode}
        {...otherProps}
      />
    );
  }
);

AutoSelect.defaultProps = {
  defaultSelectFirstOption: false,
  allowClear: true,
};

export default AutoSelect;
