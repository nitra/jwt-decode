/* global it, expect */
import jwtDecode from '../src/node.js'
import { equal } from 'assert'
import TestDirector from 'test-director'

const tests = new TestDirector()

tests.add('success', async () => {
  const token = jwtDecode(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  )

  equal(token.name, 'John Doe')
})

tests.add('test atob Invalid character', async () => {
  const token = jwtDecode(
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik16TkJNa0k0TWprek1rVXpNRE14UWtRek5UUXlRalV6TVRoR09USXlSRUpFTmtaRk16WXpOQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6Im5hIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJjYXRhbGluYS11c2VyIiwibWF0cml4LXVzZXIiLCJtYXRyaXgtYWRtaW4iLCJhdGxhcy11c2VyIiwiY2F0YWxpbmEtYWRtaW4iLCJmcmlnbyIsInZlbm9tIl0sIngtaGFzdXJhLXVzZXItaWQiOiJ2QGFiaW5iZXZlZmVzLmFwcCIsIngtaGFzdXJhLXVzZXItbmFtZSI6IlZpdGFsaWkgTml0cmEifSwibmlja25hbWUiOiJ2IiwibmFtZSI6IlZpdGFsaWkgTml0cmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvYWYwNWZlYzRlNTExNTZlMTNhMTdjNWNkMTQ4YWM2MGQ_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZ2LnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTAxLTExVDA2OjM1OjIyLjY3OVoiLCJlbWFpbCI6InZAYWJpbmJldmVmZXMuYXBwIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vYXV0aC5hYmluYmV2ZWZlcy5hcHAvIiwic3ViIjoiZW1haWx8NWU1Y2NkMjE3NmM4NTM2NzI4MTJhMWFiIiwiYXVkIjoiYXFlQzFSMlIxa1Q4NHpXY1owOExESGw2R3dlZUJGSWgiLCJpYXQiOjE2NDE4ODI5MjQsImV4cCI6MTY0MTkxODkyNCwibm9uY2UiOiJTSDQxWVZWYVZXRlVWMko1WHpGaWNrbHFTMTlPWWtWQlZXOUlMVEJZVkdOc1lrVjRXV0ZaVERKS01BPT0ifQ.f7PG7gGi8CfHI1Jr00PTKSUhMKF3QwIkG16qoQiT7X0zYH-bjJRsQ1m1Jzk2xBK5KFFVvoMuPP77u8NdDDTkpDYUbACiBH2CUkUWzX0AZ6tCv9i_6SOqyfkJTeorel0zsE1MgAyHywmNEMxXS-RJ5MeOuYOB1Ur3cJvBc-KkukBKoU4xZwgXZeFpswG277RGo82qK1J8dpLeBViZHp3kvqvuKAwGx98R8tvkAw1DYO-yTO1E2Zg1YU7ten4A0J1kxYjdpwsj-1p6uS9_RtcQ_OdQGwogfpmvqwqmO9ipyWVjNw5-LwrM4yQSiRy6JN50Wf8E2uURHfjL-rBWDz3Agg'
  )

  equal(token.name, 'John Doe')
})

tests.add('empty', async () => {
  const token = jwtDecode()

  equal(JSON.stringify(token), JSON.stringify({}))
})

tests.add('error', async () => {
  const token = jwtDecode(1)

  equal(JSON.stringify(token), JSON.stringify({}))
})

tests.run()
