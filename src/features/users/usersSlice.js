import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Ben Dover' },
  { id: '1', name: 'Mike Oxbig' },
  { id: '2', name: 'Munchma Cuchei' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
