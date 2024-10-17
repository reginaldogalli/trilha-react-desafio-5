import { api } from '../services/api';

export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts');
    return data || [];
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.from('posts').select('*').eq('id', id).single();

    return data || {};
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return {};
  }
};
