Array1 = list(range(1, 2))
Array2 = list(range(2, 5))


def median_array(arr1, arr2):
    combined_array = arr1 + arr2
    sortedarray = sorted(combined_array)

    mid_value = len(sortedarray) // 2
    if len(sortedarray) % 2 == 0:
        median = (sortedarray[mid_value - 1] + sortedarray[mid_value]) / 2
        print("Median of the array is:", median)
    else:
        print("Median of the array is:", sortedarray[mid_value])


median_array(Array1, Array2)
