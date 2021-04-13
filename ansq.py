def answer_query(qs):
  record = set()
  ans = []
  for q in qs:
    t, i = q
    if t == 2:
      #set
      record.add(i-1)
      ans.append(-1)
    elif t == 1:
      # get
      record_list = list(record)
      found = False
      for r in record_list:
        if r >= i:
          ans.append(r)
          found = True
      if not found:
        ans.append(-1)
  return ans

print(answer_query([[2, 3], [1, 2], [2, 1], [2, 3], [2, 2]]))