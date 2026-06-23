import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import UserCard from '../src/components/UserCard.vue';

describe('UserCard.vue', () => {
  it('renders user name if provided', () => {
    const wrapper = mount(UserCard, { props: { user: { name: 'Alice' } } });
    expect(wrapper.text()).toContain('Alice');
  });

  it('renders Guest User if user is null', () => {
    const wrapper = mount(UserCard);
    expect(wrapper.text()).toContain('Guest User');
  });
});

