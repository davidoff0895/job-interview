import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Counter from '../src/components/Counter.vue';

describe('Counter.vue', () => {
  it('increments value on click', async () => {
    const wrapper = mount(Counter);
    expect(wrapper.find('.count-value').text()).toBe('0');

    await wrapper.find('button').trigger('click');

    expect(wrapper.find('.count-value').text()).toBe('1');
  });
});

