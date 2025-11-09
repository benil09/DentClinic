"use client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createDoctor, getDoctors, updateDoctor } from "../lib/actions/doctors";

async function fetchDoctors() {
    const response = await fetch('/api/doctors');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export function useGetDoctors() {
    const result = useQuery({
        queryKey: ['getDoctors'],
        queryFn: getDoctors,
    });
    return result;
}   

export function useCreateDoctor() {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn:createDoctor,
        onSuccess: () => {
            //invalidate realted queries to refresh data
            queryClient.invalidateQueries({ queryKey: ['getDoctors'] });
        },
        onError: (error) => { console.error('Error creating doctor:', error) },
    })
    return result;
}

export function useUpdateDoctor() {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn:updateDoctor,
        onSuccess: () => {
            //invalidate realted queries to refresh data
            queryClient.invalidateQueries({ queryKey: ['getDoctors'] });
        },
        onError: (error) => { console.error('Error updating doctor:', error) },
    })
    return result;

}